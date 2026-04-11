import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaTrash, FaCheckCircle, FaClock, FaSignOutAlt } from 'react-icons/fa'

export default function Admin({ onLogout }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      window.location.hash = '#/admin-login'
      return
    }
    setIsAuthenticated(true)
    fetchMessages()
    const interval = setInterval(fetchMessages, 10000)
    return () => clearInterval(interval)
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:4000/api/contact/admin/messages', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      if (data.success) {
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const markAsRead = async (id) => {
    try {
      console.log(`📌 Marking message ${id} as read...`)
      const response = await fetch(`http://localhost:4000/api/contact/admin/messages/${id}/read`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      if (data.success) {
        await fetchMessages()
      }
    } catch (error) {
      console.error('Error marking as read:', error)
    }
  }

  const deleteMessage = async (id) => {
    try {
      console.log(`🗑️ Deleting message ${id}...`)
      const response = await fetch(`http://localhost:4000/api/contact/admin/messages/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      if (data.success) {
        await fetchMessages()
        setSelectedMessage(null)
      }
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    if (onLogout) {
      onLogout()
    } else {
      window.location.hash = '#/'
    }
  }

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.read
    if (filter === 'read') return msg.read
    return true
  })

  const unreadCount = messages.filter(m => !m.read).length

  return (
    <div className="min-h-screen bg-surface text-on-surface py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center justify-between"
        >
          <div>
            <h1 className="text-5xl font-bold font-headline mb-2">
              <span className="text-primary">Admin</span> Messages
            </h1>
            <p className="text-on-surface/70">Manage all contact form submissions</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-500 font-bold rounded-lg border border-red-500/50 hover:bg-red-500/30"
          >
            <FaSignOutAlt size={20} />
            Logout
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Total Messages', value: messages.length, color: 'text-primary' },
            { label: 'Unread', value: unreadCount, color: 'text-secondary' },
            { label: 'Read', value: messages.length - unreadCount, color: 'text-tertiary' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container border-2 border-primary/20 rounded-xl p-6 text-center"
            >
              <p className="text-sm uppercase tracking-widest text-on-surface/60 mb-2">{stat.label}</p>
              <p className={`text-4xl font-bold font-headline ${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {['all', 'unread', 'read'].map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-lg font-bold uppercase tracking-wider transition-all ${
                filter === f
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary-glow'
                  : 'bg-surface-container border-2 border-primary/20 text-on-surface hover:border-primary'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </motion.button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-primary text-lg">Loading messages...</p>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-12 bg-surface-container rounded-xl border-2 border-primary/20">
            <p className="text-on-surface/60">No {filter !== 'all' ? filter : ''} messages</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedMessage(msg)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  msg.read
                    ? 'bg-surface-container border-primary/20'
                    : 'bg-surface-container-highest border-primary/40 shadow-md shadow-primary-glow/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-primary">{msg.name}</h3>
                      {!msg.read && (
                        <span className="px-3 py-1 bg-primary/20 border border-primary/50 text-primary text-xs rounded-full font-bold">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-on-surface/70 mb-1">{msg.email}</p>
                    <p className="text-sm font-semibold mb-2 text-primary">{msg.subject}</p>
                    <p className="text-on-surface/80 line-clamp-2">{msg.message}</p>
                    <p className="text-xs text-on-surface/50 mt-3 flex items-center gap-2">
                      <FaClock size={12} />
                      {new Date(msg.receivedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {!msg.read && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          markAsRead(msg.id)
                        }}
                        className="p-3 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30"
                        title="Mark as read"
                      >
                        <FaCheckCircle size={18} />
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteMessage(msg.id)
                      }}
                      className="p-3 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30"
                      title="Delete"
                    >
                      <FaTrash size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedMessage(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface-container border-2 border-primary/40 rounded-xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{selectedMessage.subject}</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface/60 font-bold">From</p>
                  <p className="text-lg font-semibold">{selectedMessage.name}</p>
                  <p className="text-on-surface/80">{selectedMessage.email}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface/60 font-bold">Received</p>
                  <p className="text-on-surface/80">{new Date(selectedMessage.receivedAt).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface/60 font-bold mb-2">Message</p>
                  <p className="text-on-surface/90 whitespace-pre-wrap bg-surface-container-highest p-4 rounded-lg border border-primary/20">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                {!selectedMessage.read && (
                  <motion.button
                    onClick={() => {
                      markAsRead(selectedMessage.id)
                      setSelectedMessage(null)
                    }}
                    className="flex-1 px-4 py-3 bg-secondary text-on-primary font-bold rounded-lg hover:bg-secondary/90"
                  >
                    Mark as Read
                  </motion.button>
                )}
                <motion.button
                  onClick={() => {
                    deleteMessage(selectedMessage.id)
                    setSelectedMessage(null)
                  }}
                  className="px-4 py-3 bg-red-500/20 text-red-500 font-bold rounded-lg hover:bg-red-500/30"
                >
                  Delete
                </motion.button>
                <motion.button
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-3 bg-surface-container-highest text-on-surface font-bold rounded-lg border border-primary/20"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
