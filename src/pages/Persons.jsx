/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../layouts/PersonDetails";
import { getPersonDetails } from "../axios/api";

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
      <PersonDetails person={person}></PersonDetails>
    </>
  );
};

export default Persons;
