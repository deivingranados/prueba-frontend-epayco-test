import Input from "../../atoms/inpust/inputs";
import Textarea from "../../atoms/textarea/textarea";
import { useState } from "react";
import axios from "axios";
import Button from "../../atoms/buttons/buttons";
import ItemList from "../itemlist/ItemList";
import { validateForm } from "../../../validators";
import { Service } from "../../services/services";
import "./forms.css";

export const Forms = () => {
  const [newItem, setNewItem] = useState({
    id: 0,
    title: "",
    body: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const isValid = validateForm(formData.title, formData.body);
    e.preventDefault();
    if (isValid) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(Service.itemsPost, formData);
        setNewItem(response.data);
        alert("Los datos se han enviado con exito");
      } catch (error) {
        console.error("Error enviando los datos a la API:", error);
      } finally {
        setFormData({
          title: "",
          body: "",
        });
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container-form">
      <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Textarea
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="body"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
          />
          <Button type="submit" disabled={isSubmitting}>
            Add Item
          </Button>
        </form>
      </div>
      <div>
        <ItemList newItem={newItem} />
      </div>
    </div>
  );
};
