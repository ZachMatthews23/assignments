import React, { useState, useEffect } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import  moment  from 'moment'
import axios from 'axios'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

export default function News ({ simplified }) {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const [cryptoNews, setCryptoNews] = useState([])
    const count = simplified ? 6 : 12
    const { data } = useGetCryptosQuery(100)
      
    function getNews() {
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {q: `${newsCategory}`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off', count: `${count}`},
            headers: {
              'x-bingapis-sdk': 'true',
              'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
              'x-rapidapi-key': '118cfa6a6amsh3ce5e19d7140502p11375bjsn0443684bc70c'
            }
          };

        axios.request(options)
            .then(res => setCryptoNews(res.data))
            .catch(err => console.log(err))
    }

    function handleChange(value) {
        setNewsCategory(value)
    } 

    useEffect(() => {
        getNews()
    }, [newsCategory])

    if(!cryptoNews?.value) return 'Loading...'

    console.log(cryptoNews.value)

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select 
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => handleChange(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title level={4} className="news-title">{news.name}</Title>
                                <img style={{ maxWidth: '150px', maxHeight: '150px' }} src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news" />
                            </div>
                            <p>
                                { news.description > 100 ? `${news.description.substring(0, 100)}...`
                                : news.description } 
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
