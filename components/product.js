import { getItemData } from "@/lib/utils"
import Link from "next/link"
import style from '../styles/product.module.css'
const Product = ({ item, showAs}) => {
    console.log(item)
    if (showAs == "Page"){
        return (
        <div className={style.page}>
            <div>
                <img 
                className="image"
                src={item.data.image} 
                alt={item.data.title}
                width={300}
                height={300}
                />
            </div>

            <div className={style.info}>
                <div>
                   <h2>{item.data.title}</h2>
                </div>
                <div className={style.price}>${item.data.price}</div>
                <div>{item.data.description}</div>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        )
    };

    if (showAs == "ListItem"){
        return <div>List Item</div>
    };


  return (
  <div className={style.item}>
    <div className={style.image}>
        <Link href={`/store/${item.id}`}>
            <img 
            src={item.image} 
            alt={item.description} 
            width={150}
            height={150}
            />
        </Link>
    </div>

    <div className={item.info}>
        <h3>
        <Link href={`/store/`}>
            {item.title}
        </Link>
        </h3>
    </div>

    <div className={style.price}>
       ${item.price} 
    </div>

    <div>
        <button>Add to Cart</button>
    </div>
  </div>
  )
}

export default Product