import React, { useState, useEffect } from 'react';
import SelectComponent from './SelectComponent';
import { ListHelpers, ListDrivers, List, RegisterList, RegisterListUnique } from './requiresApis';

const ListComponent = () => {
  const [helpers, setHelpers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [day_of_the_week, setay_of_the_week] = useState([]);
  const [departureTime, setDepartureTime] = useState([]);
  const [months, setMonths] = useState([]);
  const [results, setResults] = useState([]);

  const [selectedHelper, setSelectedHelper] = useState('');
  const [selectedDriver, setSelectedDriver] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [textArea, setTextArea] = useState('');

  useEffect(() => {
    const daysArray = Array.from({ length: 30 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    setay_of_the_week(daysArray);

    const departureTimeArray = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour}h${minute.toString().padStart(2, '0')}`;
        departureTimeArray.push(time);
      }
    }
    setDepartureTime(departureTimeArray);

    const monthsArray = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    setMonths(monthsArray);

    const fetchHelpers = async () => {
      try {
        const data = await ListHelpers();
        setHelpers(data || []);
      } catch (error) {
        console.error('There was an error fetching the helpers!', error);
      }
    };

    const fetchDrivers = async () => {
      try {
        const data = await ListDrivers();
        setDrivers(data || []);
      } catch (error) {
        console.error('There was an error fetching the drivers!', error);
      }
    };

    fetchHelpers();
    fetchDrivers();
  }, []);

  const handleSearch = async () => {
    const searchParams = {
      helper: selectedHelper,
      driver: selectedDriver,
      day_of_the_week: selectedDay,
      departureTime: selectedTime,
      month: selectedMonth,
    };

    const queryString = Object.keys(searchParams)
      .filter(key => searchParams[key])
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(searchParams[key])}`)
      .join('&');

    const fullQueryString = queryString ? `?${queryString}` : '';

    try {
      const data = await List(fullQueryString);
      setResults(data || []);
      console.log('Resultados da busca:', data);

      // Resetando os campos de seleção
      setSelectedHelper('');
      setSelectedDriver('');
      setSelectedDay('');
      setSelectedTime('');
      setSelectedMonth('');
    } catch (error) {
      console.error('There was an error fetching the list!', error);
    }
  };
console.log('textArea', textArea);

  const handleRegister = async () => {
    try {
      await RegisterList(textArea);
      await RegisterListUnique(textArea);
      console.log('atualizado com sucesso!!!');

      setTextArea('');
    } catch (error) {
      console.error('There was an error register the list!', error);
    }
  }

  return (
    <div>
      <h1>List</h1>
      <SelectComponent data={helpers.map(helper => helper.helper)} type="Ajudante" onChange={(e) => setSelectedHelper(e.target.value)} value={selectedHelper} />
      <SelectComponent data={drivers.map(driver => driver.driver)} type="Motorista" onChange={(e) => setSelectedDriver(e.target.value)} value={selectedDriver} />
      <SelectComponent data={day_of_the_week} type="Dia" onChange={(e) => setSelectedDay(e.target.value)} value={selectedDay} />
      <SelectComponent data={departureTime} type="Hora" onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime} />
      <SelectComponent data={months} type="Mês" onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth} />
      <button type="button" onClick={handleSearch}>
        Buscar
      </button>
      <div>
        <h2>Resultados:</h2>
        {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
        <table>
          <thead>
            <tr>
              <th>Ajudante</th>
              <th>Motorista</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Mês</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.helper}</td>
                <td>{result.driver || '------------'}</td>
                <td>{result.day}</td>
                <td>{result.departureTime}</td>
                <td>{months[result.month -1]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div>
        <h2>cadastrar</h2>
        <textarea placeholder='inserir dados' rows="10" cols="50" onChange={(e) => setTextArea(e.target.value)  } value={textArea}></textarea>
        <button type="button" onClick={handleRegister}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default ListComponent;