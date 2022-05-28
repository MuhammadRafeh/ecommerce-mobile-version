import React, { useState, createContext, useContext, useEffect } from 'react';
import { items as defaultItems } from '../data/items';
import template from '../template/initialTemplate';
import { gql } from 'graphql-request';
import graphcms from '../graphCMS/graphCMS';
import Category from '../models/category';
import Item from '../models/item';

const AuthContext = createContext();

const QUERY = gql`
query MyQuery {
  varieties {
    id
    name
    products {
      id
      image {
        id
        url
      }
      name
      price
      excerpt
    }
  }
}`;

export const ContextProvider = ({ children }) => {

    const getData = async () => {
        const { varieties } = await graphcms.request(QUERY);
        const items = varieties.map(varieties => {
            return (
                new Category(
                    varieties.name,
                    varieties.products.map(product => (
                        new Item(
                            product.id,
                            product.name,
                            product.excerpt,
                            product.price,
                            product?.image?.url,
                            []
                        )
                    ))
                )
            )
        })
        setItems(items)
        setSavedItems(items)
    };

    useEffect(() => {
        getData();
    }, []);

    const [auth, setAuth] = useState(template.auth);

    const [cart, setCart] = useState([]);

    const [orders, setOrders] = useState([]);

    const [weeklyDeals, setWeeklyDeals] = useState([]);

    const [favoriteItems, setFavoriteItems] = useState([]);
    
    const [allData, setAllData] = useState(template);
    
    const [items, setItems] = useState([]);
    const [savedItems, setSavedItems] = useState([]);
    
    const [priceFilter, setPriceFilter] = useState('nothing');
    
    // New
    
    const [isAuth, setIsAuth] = useState(true);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, priceFilter, setPriceFilter, savedItems, setSavedItems, weeklyDeals, setWeeklyDeals, items, setItems, auth, setAuth, cart, setCart, allData, setAllData, orders, setOrders, favoriteItems, setFavoriteItems }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useEcommerceContext = () => useContext(AuthContext);
