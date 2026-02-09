"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    nombre_compania: "",
    correo: "",
    numero: "",
    mensaje: "",
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("¡Formulario enviado exitosamente!");
        setFormData({ nombre: "", nombre_compania: "", correo: "", numero: "", mensaje: "" });
        setAceptaTerminos(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Error de conexión");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="md:max-w-lg pt-6 relative md:ml-auto md:mr-12 font-poppins bg-contact p-8 rounded-3xl">
      <form
        onSubmit={handleSubmit}
        className="space-y-2 text-white">
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 font-medium ">
            Nombre y apellido
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded-lg border-transparent bg-input focus:outline-none focus:border-2 focus:border-white text-black  "
          />
        </div>
        <div>
          <label
            htmlFor="nombre"
            className="mb-2 font-medium ">
            Nombre compañia
          </label>
          <input
            type="text"
            id="nombre_compania"
            name="nombre_compania"
            value={formData.nombre_compania}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded-lg border-transparent bg-input focus:outline-none focus:border-2 focus:border-white text-black  "
          />
        </div>
        <div className="flex gap-4">
          <div>
            <label
              htmlFor="correo"
              className="mb-2 font-medium">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border rounded-lg border-transparent bg-input focus:outline-none focus:border-2 focus:border-white text-black "
            />
          </div>
          <div>
            <label
              htmlFor="numero"
              className="mb-2 font-medium">
              Teléfono
            </label>
            <input
              type="tel"
              id="numero"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              required
              className="w-full px-2 py-1 border rounded-lg border-transparent bg-input focus:outline-none focus:border-2 focus:border-white text-black "
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="mb-2 font-medium">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-2 py-1 border rounded-lg border-transparent bg-input focus:outline-none focus:border-2 focus:border-white text-black "
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="aceptaTerminos"
            checked={aceptaTerminos}
            onChange={(e) => setAceptaTerminos(e.target.checked)}
            required
            className="w-4 h-4 accent-purple cursor-pointer"
          />
          <label
            htmlFor="aceptaTerminos"
            className="text-sm  cursor-pointer text-white">
            Acepto el tratamiento de datos personales
          </label>
        </div>

        <div className="w-40 bg-transparent border border-white text-white py-1 px-4 rounded-3xl hover:text-white disabled:opacity-50  font-poppins flex justify-evenly items-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="cursor-pointer">
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
          <span className="text-xl">&#8594;</span>
        </div>

        {message && (
          <div
            className={` p-4 rounded ${status === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
