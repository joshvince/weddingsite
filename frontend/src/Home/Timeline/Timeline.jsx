import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col mt-6">
      <div><h2 className="text-3xl mb-2 text-blue font-extrabold">On the day</h2></div>
      <div className="bg-orange h-1 w-24 my-4" />
      <TimelineItem
        time="12:00"
        header="Venue opens"
        subheader="The bar will be open before the ceremony"
      />
      <TimelineItem
        time="13:00"
        header="Ceremony"
        subheader="No singing. We promise"
      />
      <TimelineItem
        time="13:30"
        header="Drinks"
        subheader="Pace yourself - but we did buy a lot of wine"
      />
      <TimelineItem
        time="15:00"
        header="Meal & Toasts"
        subheader="Giant Chicken Shawarma, potatoes and salads served family style"
      />
      <TimelineItem
        time="18:00"
        header="Evening Party"
        subheader="More guests arrive and the music will begin"
      />
      <TimelineItem
        time="20:00"
        header="Band"
        subheader="Full bar, tasty buffet and live music"
      />
      <TimelineItem
        time="23:30"
        header="Last Orders"
        subheader="Tell your taxi to arrive at midnight"
      />
    </div>
  );
};

export default Timeline;