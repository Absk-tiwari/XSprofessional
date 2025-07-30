import { Advantage } from 'components/shared/Advantage/Advantage';
import { Banner } from 'components/landing/Banner/Banner';
import { BrandLogo } from 'components/shared/BrandLogo/BrandLogo';
import { Discount } from 'components/landing/Discount/Discount';
import { Info } from 'components/landing/Info/Info';
import { NewArrivals } from 'components/landing/NewArrivals/NewArrivals';
import { TopCategories } from 'components/landing/TopCategories/TopCategories';
import { Trending } from 'components/landing/Trending/Trending';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Layout } from 'layout/Layout';
import { useGetSettingsQuery } from 'services/api';
import { useDispatch } from 'react-redux';
import { storeSettings } from 'reducers/theReducer';
import { useEffect } from 'react';
import { placeholder } from 'data/data.header';

export default function Home() {
    const { data: settings, isLoading } = useGetSettingsQuery();
    const dispatch = useDispatch();
    // ✅
    useEffect(() => {
        if (settings) {
            dispatch(storeSettings(settings));
        }
    }, [settings, dispatch]);
    if (isLoading) {
        return <div style={{width:'100vw',height:'100vh',display:'grid',placeContent:'center'}}>
            <img src={process.env.NEXT_PUBLIC_BASE_PATH+placeholder.loader}/>
        </div>
    };

    return (
        <Layout>
            <Banner />
            <Trending />
            <BrandLogo />
            <Discount />
            <Advantage />
            <TopCategories />
            <Info />
            <NewArrivals />
            {/* <LatestNews /> */}
            <Subscribe />
        </Layout>
    );
}
