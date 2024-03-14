'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function MyForm() {
  const [formData, setFormData] = useState({
    source: '',
    dest: '',
    date: ''
  });
  const router = useRouter();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log(data)
      
      router.push(`/flightDetails?data=${JSON.stringify(data)}`);
      // router.push('/flightDetails', { responseData: data  }); 

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.source} name='source' onChange={handleChange} />
      <input type="text" value={formData.dest} name='dest' onChange={handleChange} />
      <input type="date" value={formData.date} name='date' onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
