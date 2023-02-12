import Layout from "@/components/layout"
import Product from "@/components/product"
import { getItemData, getPathsFromsIds } from "@/lib/utils"

const ProductPage = ({productInfo}) => {
  return (
    <Layout>
        <Product item={productInfo} showAs="Page"/>
    </Layout>
  )
}
export async function getStaticPaths(){
    const paths = await getPathsFromsIds();

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params}) {
    const id = params.id;

    const product = await getItemData(id);

    return {
        props:{

            productInfo: product,
        }
    }
}

export default ProductPage

