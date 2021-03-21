import * as React  from "react";
// import { Link } from "react-router-dom";
import {MarketsTableScreen} from '../../containers/MarketsTableScreen';
import Slider from "react-slick";

import { eventFetch, selectEvents } from "../../modules";
import { useDispatch, useSelector } from "react-redux";
import {
  AppleFilled,
  AndroidFilled
} from '@ant-design/icons';

import './style.css';

const settingEvents = {

  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


// const arrimg = [
//   {
//     url: 'https://inhongdang.com.vn/images/images/In%20Hong%20Dang%20-%20tri%20an%20khach%20hang(1).png'
//   },
//   {
//     url: 'https://minhduongads.com/wp-content/uploads/2019/03/truyen-thong-minh-duong.jpg'
//   },
//   {
//     url: 'https://www.dienmaythienhoa.vn/static/images/2.%20landing%20pages%20promotion/banner-web-chinh-900x300.jpg'
//   },
//   {
//     url: 'https://vnso.vn/wp-content/uploads/2019/09/quang-cao-tang-100-web-banner.jpg'
//   }, 
 
// ]
export const HomeScreen: React.FC<any> = (props: any) => {

  const dispatch = useDispatch();
  const dispatchFetchEvents = () => dispatch(eventFetch());

  React.useEffect(() => {
    dispatchFetchEvents();

  }, []);

  const events = useSelector(selectEvents);
  console.log(events)

  const renderBanner = ()  => {
    return (
      <div className="landing-page__banner">
            <div className="landing-page__banner-list">
              <Slider {...settingEvents}>
                {[...events.payload].map(event => {
                    return (
                      <a style={{width: '100%', height: '100%'}} href={event.ref_link} className="slide">
                          <img style={{width: '100%', height: '100%'}} src={event.image_link} />
                      </a>
                    )
                })}
              </Slider>
            </div>
            <div className="landing-page__banner-list-link">
              {[...events.payload].map(event => {
                    return (
                      <a href={event.ref_link} className="slide-link">{event.event_name}</a>
                    )
              })}
            </div>

      </div>
    );
  }

    const renderMarket = () => {
      return (
        <div className="home-page__markets">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <MarketsTableScreen />
              </div>
            </div>
          </div>
        </div>
      ) 
    }
    
    const renderAboutUs = () => {
      const IMG1 = require("./Home/Roadmap/img1.png");
      const IMG2 = require("./Home/Roadmap/img2.png");
      const IMG3 = require("./Home/Roadmap/img3.png");

      return(
        <div className="home-page__about-us">
          <div className="container">
            <h2 className="about-us-title">Secure, Efficient, Innovative</h2>
            <p className="sub-title">We provide secure and trusted digital asset trading services for users from over 100 countries and regions around the globe.</p>
            <ul className="feature">
              <li>
                <img src={IMG1}></img>
                <h3>Various Digital Asset Services</h3>
                <p>Support instant crypto purchase, spot trading, derivatives trading and a complex of investment choices. Give you the key to access the digital world.</p>
              </li>
              <li>
                <img src={IMG2}></img>
                <h3>Multi-layer Protection</h3>
                <p>Multi-cluster network security structure. Multi-layer risk control and real time alerting system. Protect your asset security all day long.</p>
              </li>
              <li>
                <img src={IMG3}></img>
                <h3>User-oriented Design</h3>
                <p>User friendly product design. Multi-platform supported. Speedy memory matching system. All for the most stable and efficient user experience.</p>
              </li>
            </ul>
          </div>
        </div>
      );
    }
    // 
    const renderFeature = () => {
      const Image = require("./Home/feature.png");
     return (
        <div className="homepage__feature" style={{paddingBottom: '72px'}}>
          <div className="container">
            <div className="pc-index-downlod-title">
              <h3 className="pc-index-download-tit">Trade anytime, anywhere.</h3>
              <div className="pc-index-download-con">
                <p>Download the LukuTex App, start your trading journey today.</p>
              </div>
            </div>
            <div className="pc-index-download">
              <div className="pc-index-download-pic" style={{backgroundImage: 'url(' + Image + ')', backgroundRepeat: 'no-repeat'}}></div>
              <div className="download-box">
                <div className="title title-active">iOS</div>
                <div className="download-ios">
                  <div className="download-btn-ios download-appstore-active">
                    <AppleFilled />
                    <div className="download-ios-title">
                      <p>Download on the</p>
                      <p>Apple Store</p>
                    </div>
                  </div>
                  <div className="download-btn-ios download-btn-right download-active">
                    <AppleFilled />
                    <div className="download-ios-title">
                      <p>Download for</p>
                      <p>iOS</p>
                    </div>
                  </div>
                </div>
                <div className="title">Android</div>
                  <div className="download-Android">
                    <div className="download-btn-android download-btn-googlePlay">
                      <AndroidFilled />
                      <div className="download-ios-title">
                        <p>GET IT ON</p>
                        <p>Google play</p>
                      </div>
                    </div>
                    <div className="download-btn-android download-btn-right download-active">
                      <AndroidFilled />
                      <div className="download-ios-title">
                        <p>Download for</p>
                        <p>Android</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
     );
    }
    return (
        <div className="home-page">
           {renderBanner()}
           {renderMarket()}
           {renderAboutUs()}
           {renderFeature()}
        </div>
    );
}

