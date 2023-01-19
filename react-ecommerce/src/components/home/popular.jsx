import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import popularData from "../../data/home/popular";
import { Heart } from "react-bootstrap-icons";
function Popular(props) {
  const [stars, setStars] = useState(props.stars);
  const { id } = useParams();
  let foundProduct = {};
  if (id) {
    foundProduct = popularData.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }
  if (Object.keys(props).length > 0) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  const liked = props.wishlist.filter((wish) => wish.id === product.id)[0];
  console.log(liked);
  return (
    <div className="ms-5">
      <div className="popular_cards border border-1 rounded m-3">
        <img src={props.img} alt="" className="ps-3" />
        <a
          className="like-btn"
          onClick={() => {
            console.log("heart is clicked");
            if (!liked) {
              const likedProduct = {
                id: product.id,
                name: product.title,
                liked: true,
              };
              props.setWishlist([...props.wishlist, likedProduct]);
            } else {
              props.setWishlist(
                props.wishlist.filter((w) => w.id === product.id)
              );
            }
          }}
        >
          {liked ? (
            <i className="heart icon"></i>
          ) : (
            <i className="heart outline icon"></i>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </a>
        <div className="d-block">
          <h5 className=" popularcards text-start ps-3 mt-5">{props.title} </h5>
          <p className="price text-start ps-3 d-flex justify-content-between mt-3">
            {props.price}
            <a
              href=""
              className="cart bg-warning text-light p-2 me-3 rounded-pill text-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-cart-dash"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </p>
          <div className=" rating d-flex justify-content-start ps-3 ">
            <Rating initialValue={stars} size="25" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popular;
