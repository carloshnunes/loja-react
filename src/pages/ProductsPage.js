import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';
import ProductList from '../components/ProductList';
import './ProductsPage.css';
import searchIcon from '../components/images/search-icon.png';

const ProductsPage = () => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name-asc');
  const [displayLimit, setDisplayLimit] = useState(10);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleDisplayLimitChange = (e) => {
    setDisplayLimit(Number(e.target.value));
  };

  const filteredProducts = useMemo(() => {
    console.log('Filtrando produtos com termo de busca:', searchTerm);
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log('Produtos filtrados:', filtered);

    switch (sortOption) {
      case 'name-asc':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    console.log('Produtos ordenados:', filtered);

    return filtered.slice(0, displayLimit);
  }, [searchTerm, sortOption, displayLimit]);

  console.log('Produtos finais a serem exibidos:', filteredProducts);

  return (
    <div className="products-page">
      <div className="main-content">
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
          <p className="sort-label">Ordenar por:</p>
          <select
            className="order-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="name-asc">Nome (A - Z)</option>
            <option value="name-desc">Nome (Z - A)</option>
            <option value="price-asc">Preço (Baixo para Alto)</option>
            <option value="price-desc">Preço (Alto para Baixo)</option>
          </select>
          <p className="sort-label-second"> Exibição: </p>
          <select
            className="display-select"
            value={displayLimit}
            onChange={handleDisplayLimitChange}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
        <ProductList
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={filteredProducts}
          cart={cart}
        />
      </div>
      <div className="sidebar-secundaria">
        <h3 className="filterHeader">AÇÕES COMERCIAIS</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> EM PROMOÇÃO
          </label>
          <label className="filter-option">
            <input type="checkbox" /> EM OFERTA
          </label>
        </div>
        <h3 className="filterHeader">ESTOQUE</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> ESTOQUE DISPONÍVEL
          </label>
        </div>
        <h3 className="filterHeader">CATEGORIAS</h3>
        <div className="filter-group">
          <label className="filter-option">
            <input type="checkbox" /> GENÉRICOS
          </label>
          <label className="filter-option">
            <input type="checkbox" /> SIMILARES
          </label>
          <label className="filter-option">
            <input type="checkbox" /> PSICOTRÓPICOS
          </label>
          <label className="filter-option">
            <input type="checkbox" /> HIGIENE E BELEZA
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
