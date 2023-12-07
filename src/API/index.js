

export const getInventory = () => {
  return fetch("http://127.0.0.1:8000/inventry/").then((res) => res.json());
};




export const getIntesity = () => {

  return fetch("http://127.0.0.1:8000/intensity/").then((res) => res.json());
};

export const getTopic = () => {
 
  return fetch("http://127.0.0.1:8000/topic/").then((res) => res.json());
};

export const getRegion = () => {
 
  return fetch("http://127.0.0.1:8000/region/").then((res) => res.json());
};

export const getRevelance = () => {
 
  return fetch("http://127.0.0.1:8000/revelance/").then((res) => res.json());
};
export const getStartyear = () => {
 
  return fetch("http://127.0.0.1:8000/start_year/").then((res) => res.json());
};

export const getEndyear = () => {
 
  return fetch("http://127.0.0.1:8000/end_year/").then((res) => res.json());
};

export const getCountry = () => {
 
  return fetch("http://127.0.0.1:8000/country/").then((res) => res.json());
};

export const getLikelihood = () => {
  
  return fetch("http://127.0.0.1:8000/likelihood/").then((res) => res.json());
};

export const getdouble = () => {
  
  return fetch("http://127.0.0.1:8000/double/").then((res) => res.json());
};

export const getResourse = () => {
 
  return fetch("http://127.0.0.1:8000/resourse/").then((res) => res.json());
};

export const getInsight = () => {
 
  return fetch("http://127.0.0.1:8000/insight/").then((res) => res.json());
};



