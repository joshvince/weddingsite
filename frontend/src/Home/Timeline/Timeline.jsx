import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="flex flex-col mt-6">
      <div><h2 className="font-extrabold mb-4">On the day</h2></div>
      <TimelineItem
        time="12:00"
        header="Venue opens"
        subheader="Watch Josh fidget"
      />
      <TimelineItem
        time="13:00"
        header="Ceremony"
        subheader="No singing. We promise."
      />
    </div>
  );
};

export default Timeline;