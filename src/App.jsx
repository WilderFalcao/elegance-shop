import Layout from "./components/layout/Layout";
import ProductCard from "./components/shop/ProductCard";

/**
 * Componente App
 * 
 * Componente principal da aplicação.
 * Aqui demonstramos:
 * - Uso do Layout com children
 * - Passagem de props para ProductCard
 * - Renderização de listas com map()
 */
function App() {
  // Dados dos produtos (simulando dados de uma API)
  const products = [
    {
      id: 1,
      name: "Vestido Floral",
      price: 189.90,
      oldPrice: 249.90,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      tag: "Vestidos",
      isNew: true,
      discount: 24,
    },
    {
      id: 2,
      name: "Blusa de Seda",
      price: 129.90,
      image: "https://images.unsplash.com/photo-1760551600106-134557e2e3b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Blusas",
      isNew: false,
      discount: null,
    },
    {
      id: 3,
      name: "Calça Jeans",
      price: 199.90,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop",
      tag: "Calças",
      isNew: true,
      discount: null,
    },
    {
      id: 4,
      name: "Saia Midi",
      price: 149.90,
      oldPrice: 189.90,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=600&fit=crop",
      tag: "Saias",
      isNew: false,
      discount: 21,
    },
    {
      id: 5,
      name: "Conjunto Blusa e Calça amarelo",
      price: 280,
      oldPrice: 349.90,
      image: "https://plus.unsplash.com/premium_photo-1668638805580-e1811635a60a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Conjuntos",
      isNew: false,
      discount: 20,
    },
    {
      id: 6,
      name: "Blazer Off White",
      price: 339.9,
      oldPrice: 399.90,
      image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Blazers",
      isNew: false,
      discount: 15,
    },
    {
      id: 7,
      name: "Blusa Manda Longa Concreto - Oversize",
      price: 199,
      oldPrice: 249.90,
      image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Blusas",
      isNew: false,
      discount: 20,
    },
    {
      id: 8,
      name: "Blazer Azul marinho - Xadrez Clássico",
      price: 239.9,
      oldPrice: 299.90,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Blazers",
      isNew: false,
      discount: 15,
    },
  ];

  return (
    // Layout envolve todo o conteúdo (usando children)
    <Layout>
      {/* Seção de produtos */}
      <section className="section">
        <div className="container">
          {/* Cabeçalho da seção */}
          <div className="section-header">
            <h2 className="section-title">Nossos Produtos</h2>
            <p className="section-subtitle">Confira as novidades da coleção</p>
          </div>

          {/* Grid de produtos */}
          <div className="product-grid">
            {/* 
              Usando map() para renderizar uma lista de produtos.
              Cada item precisa de uma 'key' única.
            */}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
