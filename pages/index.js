import {MainLayout} from '../navigation/MainLayout'
import Head from 'next/head'

export default function Index () {
    return (
        <MainLayout title={'Home Page'}>
            <h1>Hi</h1>
            {/*<p><Link href={'/catalog'}><a>Catalog</a></Link></p>*/}
            {/*<p><Link href="/basket"><a>Basket</a></Link></p>*/}
            <p>Dreamers by Debut Women's Leopard Print Cardigan</p>
        </MainLayout>
    )
}

