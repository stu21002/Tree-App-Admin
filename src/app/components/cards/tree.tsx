export type Tree = {
    id: number;
    commonName: string;
    genus: string;
    species: string;
    subSpecies?: string | null;
    family: string;
    description?: string | null
    floweringStart?: string | null;
    floweringEnd?: string | null;   
    fruitStart: string; 
    fruitEnd: string;  
  };
  // TreeCard component definition
export function TreeCard({
    tree,
    onClick,
  }: {
    tree: Tree;
    onClick: () => void; // Add onClick to the props
  }) {
    return (
      <div
        className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
        onClick={onClick} // Attach the onClick handler
      >
        <h2 className="text-xl font-bold mb-2">{`${tree.genus} ${tree.species}`}</h2>
        <p className="text-gray-700">
          <strong>ID:</strong> {tree.id}
        </p>
        <p className="text-gray-700">
          <strong>Family:</strong> {tree.family}
        </p>
        <p className="text-gray-700">
          <strong>Common name:</strong> {tree.commonName}
        </p>
        <p className="text-gray-700">
          <strong>Flowering:</strong> {tree.floweringStart} - {tree.floweringEnd}
        </p>
        <p className="text-gray-700">
          <strong>Fruit:</strong> {tree.fruitStart} - {tree.fruitEnd}
        </p>
      </div>
    );
  }
  