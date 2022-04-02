/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/img3.jpg";
import img2 from "../../../assets/images/blog/blog-home/img2.jpg";
import img3 from "../../../assets/images/blog/blog-home/img1.jpg";

const BlogCol = ({ blog }) => {
  return (
    <Col lg="4" md="6">
    <Card>
      <a href="#">
        <Image
          className="card-img-top"
          src={img1}
          alt="wrappixel kit"
        />
      </a>
      <div className="date-pos bg-info-gradiant">
        Oct<span>23</span>
      </div>
      <h5 className="font-medium m-t-30">
        <a href="#" className="link">
          You should have eagle’s eye on new trends and techonogies
        </a>
      </h5>
      <p className="m-t-20">
        Business Park, Opp. Corns Sam Restaurant, New Yoark, US
      </p>
      <a href="#" className="linking text-themecolor m-t-10">
        Learn More <i className="ti-arrow-right"></i>
      </a>
    </Card>
  </Col>
  )
}

const BlogComponent = ({ blogs, title }) => {
  return (
    <div>
      <div className="blog-home2 spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">{title}</h2>
            </Col>
          </Row>
          <Row className="m-t-40 justify-content-center">
            {blogs.map(blog => {
              return <BlogCol key={blog.id} blog={blog} />
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogComponent;
