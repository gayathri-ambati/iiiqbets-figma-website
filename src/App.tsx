// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Service from './pages/Service'
// import Blog from './pages/Blog'
// import Products from './pages/Products'
// import AdminLogin from './pages/admin/AdminLogin'
// import AdminContacts from './pages/admin/AdminContact'
// import AdminProtectedRoute from './components/AdminProtectedRoute'
// import './App.css'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main style={{ minHeight: '80vh', padding: '2rem' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/products" element={<Products />} />

//           {/* Admin routes */}
//           <Route path="/admin" element={<AdminLogin />} />
//           <Route
//             path="/admin/contacts"
//             element={
//               <AdminProtectedRoute>
//                 <AdminContacts />
//               </AdminProtectedRoute>
//             }
//           />

//           {/* Add these missing routes or remove them from the Navbar links */}
//           <Route path="/career" element={<div>Career Page Coming Soon</div>} />
//           <Route path="/canada" element={<div>iiQbets Canada Coming Soon</div>} />
//           <Route path="/usa" element={<div>iiQbets USA Coming Soon</div>} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   )
// }

// export default App



import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Products from './pages/Products'
import AdminLogin from './pages/admin/AdminLogin'
import AdminContacts from './pages/admin/AdminContact'
import AdminProtectedRoute from './components/AdminProtectedRoute'
import { useScrollToTop } from './hooks/useScrollToTop' // adjust path
import './App.css'

function App() {
  useScrollToTop() // 👈 call the hook here

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/contacts"
            element={
              <AdminProtectedRoute>
                <AdminContacts />
              </AdminProtectedRoute>
            }
          />

          <Route path="/career" element={<div>Career Page Coming Soon</div>} />
          <Route path="/canada" element={<div>iiQbets Canada Coming Soon</div>} />
          <Route path="/usa" element={<div>iiQbets USA Coming Soon</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App