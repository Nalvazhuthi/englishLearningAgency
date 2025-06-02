import React, { useState } from "react";
import topicImage from "../assets/images/topic/topic.jpg";
import { ViewAllIcon } from "../assets/svgs/exportIcons";

// Define Topic type
type Topic = {
  topicImage: string;
  topic: string;
  totalTopics: number;
};

const Topics = () => {
  const topics: Topic[] = [
    { topicImage: topicImage, topic: "Entrepreneurship", totalTopics: 124 },
    { topicImage: topicImage, topic: "Wellness", totalTopics: 24 },
    { topicImage: topicImage, topic: "Food & Beverage", totalTopics: 65 },
    { topicImage: topicImage, topic: "Sustainability", totalTopics: 75 },
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
            zIndex: 9999,
            objectFit: "cover",
            transform: "translate(-50%,-50%)"
          }}
        />
      )}
    </div>
  );
};

export default Topics;


