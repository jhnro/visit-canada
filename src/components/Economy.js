import React from "react";
import boost from "../images/icon-boost.png";

function Economy() {
  return (
    <section id="option">
      <div className="container">
        <div className="section-header">
          <img src={boost} alt="Chart" />
          <h2>Economy</h2>
        </div>

        <div className="row ranking">
          <p className="second">
            Canada has a highly developed mixed-market economy, with the world's
            ninth-largest economy as of 2023, and a nominal GDP of approximately
            US$2.221 trillion. It is one of the world's largest trading nations,
            with a highly globalized economy. In 2021, Canadian trade in goods
            and services reached $2.016 trillion. Canada's exports totalled over
            $637 billion, while its imported goods were worth over $631 billion,
            of which approximately $391 billion originated from the United
            States. In 2018, Canada had a trade deficit in goods of $22 billion
            and a trade deficit in services of $25 billion. The Toronto Stock
            Exchange is the ninth-largest stock exchange in the world by market
            capitalization, listing over 1,500 companies with a combined market
            capitalization of over US$2 trillion. Canada has a strong
            cooperative banking sector, with the world's highest per-capita
            membership in credit unions. It ranks low in the Corruption
            Perceptions Index (14th in 2023) and "is widely regarded as among
            the least corrupt countries of the world". It ranks high in the
            Global Competitiveness Report (14th in 2019) and Global Innovation
            Index (15th in 2023). Among developed countries, Canada has an
            unusually important primary sector, of which the forestry and
            petroleum industries are the most prominent components. Many towns
            in northern Canada, where agriculture is difficult, are sustained by
            nearby mines or sources of timber.
          </p>
        </div>
        <div className="row ranking">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Ranking</h3>
            <p className="second">
              Canada's economy ranks above most Western nations on The Heritage
              Foundation's Index of Economic Freedom and experiences a
              relatively low level of income disparity. The country's average
              household disposable income per capita is "well above" the OECD
              average. Canada ranks among the lowest of the most developed
              countries for housing affordability and foreign direct investment.
            </p>
          </div>

          <div className="col-sm-6 col-md-6 col-sm-12">
            <h3> Industry and Services</h3>
            <p className="second">
              Since the early 20th century, the growth of Canada's
              manufacturing, mining, and service sectors has transformed the
              nation from a largely rural economy to an urbanized, industrial
              one. Like many other developed countries, the Canadian economy is
              dominated by the service industry, which employs about
              three-quarters of the country's workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Economy;
