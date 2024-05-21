/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../layouts/PersonDetails";
import Navbar from "../layouts/Navbar";
import { getPersonDetails } from "../axios/api";
import Footer from "../layouts/Footer";

const Persons = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPerson = async (id) => {
      const getPerson = await getPersonDetails(id);
      setPerson(getPerson);
    };

    fetchPerson(id);
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <PersonDetails person={person}></PersonDetails>
      <Footer></Footer>
    </>
  );
};

export default Persons;
