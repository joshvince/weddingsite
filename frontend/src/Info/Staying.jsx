import React from "react";

const Staying = () => {
  return (
    <div className="mt-12">
      <h1 className="text-4xl text-blue-darker font-extrabold">Staying</h1>
      <div className="bg-blue h-1 w-24 my-4" />
      <p className="my-6">
        The evening party finishes at around{" "}
        <span className="text-blue font-bold">midnight,</span> so if you're
        travelling far it's likely you'll need a hotel or an AirBnB.
      </p>
      <div className="mb-6">
        <h2 className="text-blue-dark font-extrabold mb-2">Worthing</h2>
        <p>
          There are a lot of hotels, the town center is about a 15
          minute drive.<br/><br/>
        </p>
        <a
          href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgM&lang=en-gb&sid=10a90be025083fb2c9aaa8584d3bc477&sb=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQH4AQuIAgGoAgM%3Bsid%3D10a90be025083fb2c9aaa8584d3bc477%3Bsb_price_type%3Dtotal%26%3B&ss=Worthing%2C+West+Sussex%2C+United+Kingdom&is_ski_area=&checkin_year=2019&checkin_month=6&checkin_monthday=22&checkout_year=2019&checkout_month=6&checkout_monthday=23&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=4cfa8d671d0b0015&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2612151&dest_type=city&place_id_lat=50.81169&place_id_lon=-0.37039&search_pageview_id=4cfa8d671d0b0015&search_selected=true&ss_raw=worthing#map_opened-map-header-cta"
          className="text-blue-darker border-b-4 border-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out some local hotels
        </a>
      </div>
      <div className="mb-6">
        <h2 className="text-blue-dark font-extrabold mb-2">Findon</h2>
        <p>
          Findon is the closest village to the venue but there are far fewer
          hotels and AirBnBs. <br />
          <br />
          If you stay in Findon, you'll still want to get a taxi because the
          venue is in the hills.<br/><br/>
        </p>
        <a
          href="https://www.airbnb.co.uk/s/Findon/homes?checkin=2019-06-22&checkout=2019-06-23&adults=2&children=0&infants=0&guests=1&click_referer=t%3ASEE_ALL%7Csid%3Aaa1f96fa-48a5-46b3-9398-8a6f80588e15%7Cst%3ALANDING_PAGE_MARQUEE&title_type=NONE&refinement_paths%5B%5D=%2Fhomes&allow_override%5B%5D=&s_tag=d7I6VBRQ"
          className="text-blue-darker border-b-4 border-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out some local AirBnBs
        </a>
      </div>
    </div>
  );
};

export default Staying;
