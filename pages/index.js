// pages/index.js

import { useEffect, useState } from "react";
import { createItem, deleteItem, fetchItems } from "../services/api";

export default function Home() {
  const [items, setItems] = useState([]);

  const [formData, setFormData] = useState({
    nama: "",
    tinggi_badan: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createItem(formData);

      loadItems();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loadItems = async () => {
    const data = await fetchItems();
    setItems(data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tinggi_badan">Tinggi Badan</label>
          <input
            type="text"
            id="tinggi_badan"
            name="tinggi_badan"
            value={formData.tinggi_badan}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Tambah Data</button>
      </form>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleDelete(item.id)}>
            <div>{item.nama}</div>
            <div>{item.tinggi_badan}</div>
            <div>{item.gender}</div>
            <button>DELETE DATA BERIKUT</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
