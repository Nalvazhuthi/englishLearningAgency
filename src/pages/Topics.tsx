import React, { Suspense, useState } from "react";
import topicImage1 from "../assets/images/topic/Entrepreneurship.jpg";
import topicImage2 from "../assets/images/topic/topic.jpg";
import topicImage3 from "../assets/images/topic/Food & Beverage.png";
import topicImage4 from "../assets/images/topic/Sustainability.jpg";
import { ViewAllIcon } from "../assets/svgs/exportIcons";

// Define Topic type
type Topic = {
  topicImage: string;
  topic: string;
  totalTopics: number;
};

const Topics = () => {
  const topics: Topic[] = [
    { topicImage: topicImage1, topic: "Entrepreneurship", totalTopics: 124 },
    { topicImage: topicImage2, topic: "Wellness", totalTopics: 24 },
    { topicImage: topicImage3, topic: "Food & Beverage", totalTopics: 65 },
    { topicImage: topicImage4, topic: "Sustainability", totalTopics: 75 },
  ];

  // hoveredTopic can be Topic or null initially
  const [hoveredTopic, setHoveredTopic] = useState<Topic | null>(null);

  // cursorPos state type
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Add types to parameters
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, topic: Topic) => {
    setHoveredTopic(topic);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredTopic(null);
  };

  return (
    <div className="page-container topics-container" style={{ position: "relative" }}>
      <div className="header">Our favorite Topics</div>
      <div className="topics-wrapper">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic"
            onMouseMove={(e) => handleMouseMove(e, topic)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="topic-left">
              <div className="topic-index">0{index + 1}/</div>
              <div className="topic-name">{topic.topic}</div>
            </div>
            <div className="topic-right">
              <div className="podcasts">{topic.totalTopics} Podcasts</div>
              <div className="viewAll">
                <ViewAllIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show image near cursor if hoveredTopic is not null */}

      {hoveredTopic && (
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <img
            src={hoveredTopic.topicImage}
            alt={hoveredTopic.topic}
            style={{
              position: "fixed",
              top: cursorPos.y + 15,
              left: cursorPos.x + 15,
              width: 300,
              height: 180,
              pointerEvents: "none",
              borderRadius: 8,
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "top 0.1s ease, left 0.1s ease",
              zIndex: 1,
              objectFit: "cover",
              transform: "translate(-50%,-50%)"
            }}
          />
        </Suspense>
      )}

    </div>
  );
};

export default Topics;


