import Router from 'next/router'
import Head from 'next/head'
import {MainLayout} from '../navigation/MainLayout'

export default function Catalog() {

    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'Catalog page'}>
            <h1>Catalog page</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/basket')}>Go to basket</button>
        </MainLayout>
    )
}