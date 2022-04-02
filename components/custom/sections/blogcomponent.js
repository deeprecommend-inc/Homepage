/* eslint-disable */
import React, { useEffect } from "react";
import { Row, Col, Container, Card } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/blog/blog-home/img3.jpg";
import img2 from "../../../assets/images/blog/blog-home/img2.jpg";
import img3 from "../../../assets/images/blog/blog-home/img1.jpg";
import moment from 'moment';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { blogDetailSlice } from "../../../store/blogDetail";
import { asyncLocalStorage } from "../../../utils/asyncLocalStorage";

const BlogCol = ({ blog }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const toDetail = () => {
    dispatch(
      blogDetailSlice.actions.setBlogDetail(blog)
    )
    router.push('/lab' + '/' + blog.id)
  }

  return (
    <Col lg="4" md="6" onClick={toDetail}>
      <Card>
        <a href="#">
          <img
            className="card-img-top"
            src={blog.img}
            alt="wrappixel kit"
          />
        </a>
        <div className="date-pos bg-info-gradiant">
          {moment(blog.created_at).format('DD/MM/YYYY')}
        </div>
        <h5 className="font-medium m-t-30">
          <a href="#" className="link">
            {blog.title}
          </a>
        </h5>
        <p className="m-t-20">
          {blog.body.replace(/\n/, '').slice(0, 50) + '...'}
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
