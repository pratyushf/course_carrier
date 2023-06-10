import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useState } from 'react';
import { apiUrl, filterData } from './data';
import { useEffect, toast } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)
  
  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl)
      let output = await res.json();
      setCourses(output.data)
      //object containes field named data which includes furthur key-value pairs
    }
    catch (error) {
      toast.error("Something went wrong")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><Filter filterData={filterData} category = {category} setCategory = {setCategory}></Filter></div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category = {category}/>)
        }
        </div>
    </div>
  );
}

export default App;