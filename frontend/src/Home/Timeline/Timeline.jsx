import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col mt-6">
      <div><h2 className="text-3xl mb-2 text-blue-darker font-extrabold">On the day</h2></div>
      <div className="bg-blue h-1 w-24 my-4" />
      <TimelineItem
        time="12:30"
        header="Venue opens"
        subheader="Please try and get there before Bethan does"
      />
      <TimelineItem
        time="13:00"
        header="Ceremony"
        subheader="No singing. We promise"
      />
      <TimelineItem
        time="13:30"
        header="Drinks & Photos"
        subheader="Beer, wine and sunshine"
      />
      <TimelineItem
        time="15:00"
        header="Meal & Speeches"
        subheader="Giant Chicken Shawarma and salads served family style"
      />
      <TimelineItem
        time="18:30"
        header="Evening Party"
        subheader="Evening guests arrive and the music will begin"
      />
      <TimelineItem
        time="20:00"
        header="Band"
        subheader="Drinks, tasty buffet and live music"
      />
      <TimelineItem
        time="23:30"
        header="Last Orders"
        subheader="Tell your taxi to be there at 23:45"
      />
    </div>
  );
};

export default Timeline;