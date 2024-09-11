import { useEffect, useState } from "react";

type Tproduct= {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  img: string;
};

type Tproductapi={
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
};

function EcommerceSorting() {
  const [products, setProducts] = useState<Tproduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState([0, 200]);
  const [sortOption, setSortOption] = useState("");

  // Filter and sort products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        // Transform data to match product structure
        const transformedData = data.products.map((item: Tproductapi) => ({
          id: item.id,
          name: item.title,
          category: item.category, // Fake categories
          price: item.price, // Random price
          rating: (Math.random() * 5).toFixed(1), // Random rating
          img: item.images[0], // Placeholder image
        }));
        const transformedCategories=[...new Set(data.products.map((item: Tproductapi)=>item.category as string))] as string[]
        setProducts(transformedData);
        setCategories(transformedCategories)
        console.log(transformedCategories)
      });

  }, []);

  // Filter and sort products
  const filteredProducts = products
  .filter(product => categoryFilter ? product.category === categoryFilter : true)
  .filter(product => product.price >= priceFilter[0] && product.price <= priceFilter[1])
  .sort((a, b) => {
      if (sortOption === 'price_low_high') return a.price - b.price;
      if (sortOption === 'price_high_low') return b.price - a.price;
      if (sortOption === 'rating_high_low') return b.rating - a.rating;
      return 0;
  });
  return (
    <div className="min-h-screen flex">
      {/* Sidebar / Filters */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All</option>
            {categories.map(itm=><option value={itm}>{itm}</option>)}
          </select>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={priceFilter[1]}
            onChange={(e) => setPriceFilter([0, Number(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm">Up to ${priceFilter[1]}</p>
        </div>

        {/* Sort Options */}
        <div>
          <h3 className="font-semibold mb-2">Sort By</h3>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">None</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="rating_high_low">Rating: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-4 border rounded">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover mb-2"
                />
                <h3 className="font-bold">{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EcommerceSorting;
