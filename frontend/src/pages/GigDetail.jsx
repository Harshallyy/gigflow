import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function GigDetail() {
  const { id: gigId } = useParams();
  const [gig, setGig] = useState(null);
  const [bids, setBids] = useState([]);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    api.get("/api/gigs").then(res => {
      const found = res.data.find(g => g._id === gigId);
      setGig(found);
    });

    api.get(`/api/bids/${gigId}`).then(res => setBids(res.data));
  }, [gigId]);

  const submitBid = async () => {
    try {
      await api.post("/api/bids", {
        gigId,
        message,
        price,
      });

      const res = await api.get(`/api/bids/${gigId}`);
      setBids(res.data);
      setMessage("");
      setPrice("");
    } catch (err) {
      alert("Login required to place bid");
    }
  };

  const hireBid = async (bidId) => {
    try {
      await api.patch(`/api/bids/${bidId}/hire`);
      const res = await api.get(`/api/bids/${gigId}`);
      setBids(res.data);
    } catch (err) {
      alert("Login required to hire");
    }
  };

  if (!gig) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-20 space-y-10">
      <div className="glass p-10">
        <h1 className="text-4xl font-bold gradient-text">{gig.title}</h1>
        <p className="text-gray-300 mt-4">{gig.description}</p>
        <p className="mt-6 text-2xl font-semibold">₹ {gig.budget}</p>
      </div>

      <div className="glass p-8">
        <h2 className="text-xl font-semibold mb-6">Place a Bid</h2>

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-full mb-4 p-4 rounded-xl bg-transparent border border-white/20 outline-none text-gray-200"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Your price"
          className="w-full mb-6 p-4 rounded-xl bg-transparent border border-white/20 outline-none text-gray-200"
        />

        <button className="glass-btn" onClick={submitBid}>
          Submit Bid
        </button>
      </div>

      <div className="space-y-4">
        {bids.map(bid => (
          <div
            key={bid._id}
            className="glass p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-200">{bid.message}</p>
              <p className="text-gray-400 mt-1">₹ {bid.price}</p>
            </div>

            {bid.status === "pending" && (
              <button
                className="glass-btn-outline"
                onClick={() => hireBid(bid._id)}
              >
                Hire
              </button>
            )}

            {bid.status === "hired" && (
              <span className="status-hired">Hired</span>
            )}

            {bid.status === "rejected" && (
              <span className="status-rejected">Rejected</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
