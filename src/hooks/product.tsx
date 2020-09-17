import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import productState from '../data/1596671839581.json';

export interface ProductState {
  categoria: string;
  codigo: string;
  nome: string;
  pv: string;
  bruto: string;
  ref: string;
  desc25: string;
  desc35: string;
  desc42: string;
  desc50: string;
}

export interface WishlistState {
  quantity: number;
  product: ProductState;
}

interface ProductContextData {
  products: ProductState[];
  wishlist: WishlistState[];
  addWishlist(product: ProductState): void;
  removeWishlist(product: ProductState): void;
  inputWishlist(product: ProductState, quantity: number): void;
  totalProduct: (product: ProductState) => number;
}

interface WishlistIndex {
  product: ProductState;
  flag?: boolean;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

const ProductProvider: React.FC = ({ children }) => {
  const [products] = useState<ProductState[]>(productState);

  const [wishlist, setWishlist] = useState<WishlistState[]>(() => {
    const storageWishlistProducts = localStorage.getItem(
      '@ProteinFinder:wishlist',
    );

    if (storageWishlistProducts) return JSON.parse(storageWishlistProducts);

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ProteinFinder:wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const wishlistIndex = useCallback(
    ({ product: { codigo: codigoProduct }, flag = false }: WishlistIndex) => {
      return wishlist.findIndex((item: WishlistState) => {
        const { codigo } = item.product;
        const condition = flag ? item.quantity > 1 : true;

        return condition && codigo === codigoProduct;
      });
    },
    [wishlist],
  );

  const addWishlist = useCallback(
    (product: ProductState) => {
      if (wishlistIndex({ product }) < 0) {
        const wishlistFormatted: WishlistState = {
          quantity: 1,
          product,
        };

        setWishlist([...wishlist, wishlistFormatted]);
      } else {
        const wishlistEdit: WishlistState[] = wishlist.map(
          ({ quantity, product: productMap }: WishlistState, index: number) => {
            const wishlistQuantity =
              wishlistIndex({ product }) === index ? quantity + 1 : quantity;

            return {
              quantity: wishlistQuantity,
              product: productMap,
            };
          },
        );

        setWishlist([...wishlistEdit]);
      }
    },
    [wishlist, wishlistIndex],
  );

  const removeWishlist = useCallback(
    (product: ProductState) => {
      if (wishlistIndex({ product, flag: true }) >= 0) {
        const wishlistEdit: WishlistState[] = wishlist.map(
          ({ quantity, product: productMap }: WishlistState, index: number) => {
            const wishlistQuantity =
              wishlistIndex({ product, flag: true }) === index
                ? quantity - 1
                : quantity;

            return {
              quantity: wishlistQuantity,
              product: productMap,
            };
          },
        );

        setWishlist([...wishlistEdit]);
      } else {
        const wishlistFiltered: WishlistState[] = wishlist.filter(
          (item: WishlistState) => item.product.codigo !== product.codigo,
        );

        setWishlist([...wishlistFiltered]);
      }
    },
    [wishlist, wishlistIndex],
  );

  const inputWishlist = useCallback(
    (product: ProductState, quantity: number) => {
      if (quantity === 0) {
        const wishlistFiltered: WishlistState[] = wishlist.filter(
          (item: WishlistState) => item.product.codigo !== product.codigo,
        );

        setWishlist([...wishlistFiltered]);
      } else {
        const wishlistEdit: WishlistState[] = wishlist.map(
          (itemMap: WishlistState, index: number) => {
            const wishlistQuantity =
              wishlistIndex({ product }) === index
                ? quantity
                : itemMap.quantity;

            return {
              ...itemMap,
              quantity: wishlistQuantity,
            };
          },
        );

        setWishlist([...wishlistEdit]);
      }
    },
    [wishlist, wishlistIndex],
  );

  const totalProduct = useMemo(
    () => ({ codigo }: ProductState) => {
      if (!codigo) return 0;

      const findProduct = wishlist.find(
        ({ product }: WishlistState) => product.codigo === codigo,
      );

      return findProduct ? findProduct.quantity : 0;
    },
    [wishlist],
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        wishlist,
        addWishlist,
        removeWishlist,
        inputWishlist,
        totalProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context)
    throw new Error('useProduct must be within an ProductProvider.');

  return context;
}

export { ProductProvider, useProduct };
