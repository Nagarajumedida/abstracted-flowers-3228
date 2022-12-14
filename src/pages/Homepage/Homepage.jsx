import React, { useEffect } from 'react'
import "./Homepage.css"
const Homepage = () => {
  useEffect(() => {
    document.title = "Online Electronic Shopping Store in India - Reliance Digital";
  }, []);
  return (
    <div>Homepage</div>
  )
}

export default Homepage