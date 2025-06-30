import { useState } from "react";
import { useAuth } from "../context/useAuth"; // ✅ correct
import { uploadImage } from "../services/api";

const UploadForm = () => {
  const { token, isAuthenticated } = useAuth();
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!image || !token) return;

    try {
      const result = await uploadImage(image, token);
   setMessage(`Image envoyée ! Voir : ${result.url}`);


    } catch {
      setMessage("Erreur lors de l’envoi.");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <p>Veuillez vous connecter</p>
      ) : (
        <>
          <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} />
          <button onClick={handleUpload}>Envoyer</button>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
};

export default UploadForm;
