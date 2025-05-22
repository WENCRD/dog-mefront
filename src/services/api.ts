const API_BASE = "http://localhost:4000/api";

export const getGalleryImages = async (): Promise<string[]> => {
  const response = await fetch(`${API_BASE}/images`);
  if (!response.ok) throw new Error("Erreur chargement images");
  return await response.json();
};

export const uploadImage = async (file: File, token: string) => {
  const formData = new FormData();
  formData.append("image", file); // ⚠️ correspond à multer.single("image")

  const response = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) throw new Error("Erreur d'upload");

  return await response.json();
};

export const deleteImage = async (filename: string, token: string) => {
  const response = await fetch(`${API_BASE}/image/${filename}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Erreur suppression");

  return await response.json();
};
