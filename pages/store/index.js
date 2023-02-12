import Layout from "@/components/layout"
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import Image from "next/image";
import styleItems from '../../styles/product.module.css'


const index = ({items}) => {
  return (
    <Layout>
      <h1>Store</h1>
      <div className={styleItems.items}>
       {
        items &&
         items.map((item) => (
         <Product key={item.id} item={item} showAs="Default"/>
         
          ))
      } 
      </div>
      
    </Layout>
  );

  
}

export async function getStaticProps(){
    const res = await getItems();

    return {
      props: {
        items: res,
      }
    }
  }

export default index