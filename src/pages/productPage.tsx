interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    thumbnail: string;
  }
  
  export const ProductPage = () => {
    const { data: products, isLoading, error } = useQuery<Product[]>(
      ["products"],
      fetchProducts
    );
  
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Utilisez le type Product ici aussi
  
    const handleFilter = (maxPrice: number) => {
      if (!products) return; // Assurez-vous que 'products' existe avant de filtrer
      const filtered = products.filter((product) => product.price <= maxPrice);
      setFilteredProducts(filtered);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <ProductFilter onFilter={handleFilter} />
        <div className="product-grid">
          {(filteredProducts.length ? filteredProducts : products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  