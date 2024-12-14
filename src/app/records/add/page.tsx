"use client";
import { useState } from "react";

export default function AddTreePage() {
  // State for the form data
  const [commonName, setCommonName] = useState("");
  const [genus, setGenus] = useState("");
  const [species, setSpecies] = useState("");
  const [family, setFamily] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Handle submission logic (e.g., send the data to the backend)
    const newTree = {
      commonName,
      genus,
      species,
      description,
    };

    // Log the new tree data for now (replace with actual submission logic)
    console.log("New Tree Submitted:", newTree);

    // Optionally, reset the form after submission
    setCommonName("");
    setGenus("");
    setSpecies("");
    setDescription("None");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Add a New Tree</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Common Name</label>
          <input
            type="text"
            value={commonName}
            onChange={(e) => setCommonName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Genus</label>
          <input
            type="text"
            value={genus}
            onChange={(e) => setGenus(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Species</label>
          <input
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Family</label>
          <input
            type="text"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            rows={3}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition"
          >
            Add Tree
          </button>
        </div>
      </form>
    </div>
  );
}
