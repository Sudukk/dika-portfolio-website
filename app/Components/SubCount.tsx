"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface SubCountProps {
  apiKey: string;
  channelId: string;
}

const SubCount: React.FC<SubCountProps> = ({ apiKey, channelId }) => {
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const count = data?.items?.[0]?.statistics?.subscriberCount;

        if (count) {
          setSubscriberCount(parseInt(count, 10));
        } else {
          setError("Subscriber count not found.");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      }
    };

    fetchSubscriberCount();
  }, [apiKey, channelId]);

  if (error) {
    return <div className="text-center text-red-500">Could not load subscriber count</div>;
  }

  if (subscriberCount !== null) {
    return (
      <div className="flex flex-col items-center justify-center p-3">
      <AiOutlineUser className="text-2xl md:text-lg mb-2" />
      <p className="text-center text-sm md:text-base">
        {subscriberCount.toLocaleString()} Subscribers
      </p>
    </div>
    );
  }
};

export default SubCount;
