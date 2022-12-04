import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {AboutApi, AboutType} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const About = () => {
  const [contents, setContents] = useState<AboutType[]>([]);
  const [loading, setLoading] = useState(false);

  const image = 'https://digitalmarketingprofs.in/blog/wp-content/uploads/2018/07/typescript-logo.jpg';

  const fetchContents = useCallback(async () => {
    try {
      setLoading(true);
      const contentsResponse = await axiosApi.get<AboutApi>('myBlog/about.json');
      const contents = Object.keys(contentsResponse.data).map(key => {
        const content = contentsResponse.data[key];
        content.id = key;
        return content;
      });
      setContents(contents);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchContents();
  }, [fetchContents]);

  return (
    <div className="row">
      {loading ? <Spinner/> : contents.map(content => (
        <div className="col-8 py-3" key={content.id}>
          <h3>{content.title}</h3>
          <div>
            <p>{content.text}</p>
            <p>{content.text1}</p>
          </div>
        </div>
      ))}
      <div className="col-4">
        <img src={image} alt={"ts-logo"} style={{background: "no-repeat center center"}}></img>
      </div>
    </div>
  );
};

export default About;