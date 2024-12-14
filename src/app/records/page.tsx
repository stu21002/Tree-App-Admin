"use client"; // Ensure this is a client-side component to use React state

import { useState } from "react";
import { Tree, TreeCard } from "../components/cards/tree";

// Define the Tree type

// Dummy data array: South African Trees
const trees: Tree[] = [
    { 
      id: 1, 
      commonName: "Outeniqua Yellowwood", 
      genus: "Podocarpus", 
      species: "falcatus", 
      subSpecies: "n/a", 
      family: "Podocarpaceae", 
      floweringStart: "October", 
      floweringEnd: "November", 
      fruitStart: "January", 
      fruitEnd: "February" 
    },
    { 
      id: 2, 
      commonName: "Real Yellowwood", 
      genus: "Podocarpus", 
      species: "latifolius", 
      subSpecies: "n/a", 
      family: "Podocarpaceae", 
      floweringStart: "September", 
      floweringEnd: "October", 
      fruitStart: "March", 
      fruitEnd: "April" 
    },
    { 
      id: 3, 
      commonName: "Cape Ash", 
      genus: "Ekebergia", 
      species: "capensis", 
      subSpecies: "n/a", 
      family: "Meliaceae", 
      floweringStart: "August", 
      floweringEnd: "September", 
      fruitStart: "December", 
      fruitEnd: "January" 
    },
    { 
      id: 4, 
      commonName: "Wild Fig", 
      genus: "Ficus", 
      species: "sycomorus", 
      subSpecies: "n/a", 
      family: "Moraceae", 
      floweringStart: "February", 
      floweringEnd: "March", 
      fruitStart: "March", 
      fruitEnd: "April" 
    },
    { 
      id: 5, 
      commonName: "Hard Pear", 
      genus: "Olinia", 
      species: "ventosa", 
      subSpecies: "n/a", 
      family: "Oliniaceae", 
      floweringStart: "August", 
      floweringEnd: "September", 
      fruitStart: "February", 
      fruitEnd: "March" 
    },
    { 
      id: 6, 
      commonName: "Podocarpus", 
      genus: "Podocarpus", 
      species: "spp.", 
      subSpecies: "n/a", 
      family: "Podocarpaceae", 
      floweringStart: "October", 
      floweringEnd: "November", 
      fruitStart: "February", 
      fruitEnd: "March" 
    },
    { 
      id: 7, 
      commonName: "Black Ironwood", 
      genus: "Olax", 
      species: "obtusifolia", 
      subSpecies: "n/a", 
      family: "Olacaceae", 
      floweringStart: "May", 
      floweringEnd: "June", 
      fruitStart: "August", 
      fruitEnd: "September" 
    },
    { 
      id: 8, 
      commonName: "Tree Fuchsia", 
      genus: "Halleria", 
      species: "lucida", 
      subSpecies: "n/a", 
      family: "Scrophulariaceae", 
      floweringStart: "October", 
      floweringEnd: "November", 
      fruitStart: "December", 
      fruitEnd: "January" 
    },
  ];
  
  
export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTree, setSelectedTree] = useState<Tree | null>(null);
  
    // Function to open the modal with the selected tree
    const handleCardClick = (tree: Tree) => {
      setSelectedTree(tree);
      setIsModalOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTree(null);
    };
  
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold">Tree Records</div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
            + Add Tree
          </button>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trees.map((tree) => (
            <TreeCard
              key={tree.id}
              tree={tree}
              onClick={() => handleCardClick(tree)} 
            />
          ))}
        </div>
  
        {/* Modal Overlay */}
        {isModalOpen && selectedTree && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h2 className="text-xl font-bold mb-4">Edit Tree</h2>
              <form>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Common Name
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedTree.commonName}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Genus
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedTree.genus}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Species
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedTree.species}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                {/* Add other fields as needed */}
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }


