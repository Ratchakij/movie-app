import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishLists: localStorage.getItem("wishLists")
    ? JSON.parse(localStorage.getItem("wishLists"))
    : [],
};

export const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      //   console.log("wishlist data", action.payload);

      let existItem = state.wishLists?.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (existItem >= 0) {
        alert("This movie has already ");
      } else {
        let buildWishlistItem = { ...action.payload };

        state.wishLists?.push(buildWishlistItem);

        localStorage.setItem("wishlist", JSON.stringify(state.wishLists));
      }

      //   let checkWishList = state.wishLists?.findIndex(
      //     (item) => item?.id === action.payload?.id
      //   );

      //   if (checkWishList >= 0) {
      //     alert("cannot add this to wishlists ");
      //   } else {
      //     let buildWishlist = { ...action.payload };
      //     state.wishLists?.push(buildWishlist);
      //     localStorage.setItem(
      //       "wishlistItems",
      //       JSON.stringify(state.wishLists)
      //     );
      //   }
    },

    //remove from wishlist

    removeWishlist: (state, action) => {
      const updatedWishlists = state.wishLists?.filter(
        (item) => item?.id !== action.payload?.id
      );

      state.wishLists = updatedWishlists;

      localStorage.setItem("wishlistItems", JSON.stringify(state.wishLists));
    },

    clearWishlists: (state, action) => {
      state.wishLists = [];
    },
  },
});

// Action creators are generated for each case reducer function
// export const { } = cartsSlice.actions

export const { addToWishList, removeWishlist, clearWishlists } =
  wishSlice.actions;

export default wishSlice.reducer;
