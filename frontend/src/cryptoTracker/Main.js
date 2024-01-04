import React from 'react';
import useFetchTrendingCoins from './hooks/useFetchTrendingCoins'
import {
    MainWrapper, SectionHeading, Table, TableHeader,
    TableBody, TableRow, TableData
} from './styles'
import EmptyState from './EmptyState';


const Main = () => {

    const { trendingCoins = [] } = useFetchTrendingCoins();
    return (
        !trendingCoins?.length ? <EmptyState /> :
            <MainWrapper>
                <SectionHeading>List of 10 Trending Coins</SectionHeading>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>Coin</TableHeader>
                            <TableHeader>Price (USD)</TableHeader>
                            <TableHeader>24th Change (%)</TableHeader>
                            <TableHeader>Ath Change (%)</TableHeader>
                            <TableHeader>Market Cap</TableHeader>
                            <TableHeader>Total Supply</TableHeader>
                        </TableRow>
                    </thead>
                    <TableBody>
                        {(trendingCoins || []).map((item) => (
                            <TableRow key={item?.id}>
                                <TableData>{item?.name}</TableData>
                                <TableData>{item?.current_price}</TableData>
                                <TableData>{item?.market_cap_change_percentage_24h}</TableData>
                                <TableData>{item?.ath_change_percentage}</TableData>
                                <TableData>{item?.market_cap}</TableData>
                                <TableData>{(item?.total_supply).toFixed(2)}</TableData>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MainWrapper>
    );
};

export default Main;
