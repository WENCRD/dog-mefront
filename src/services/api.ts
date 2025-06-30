const API_BASE = import.meta.env.VITE_API_URL;

type ImageData = {
  url: string;
  public_id: string;
};

export const getGalleryImages = async (): Promise<ImageData[]> => {
  const response = await fetch(`${API_BASE}/images`);
  if (!response.ok) throw new Error("Erreur chargement images");
  return await response.json();
};

type UploadResponse = {
  url: string;
  public_id: string;
};

export const uploadImage = async (file: File, token: string): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append("image", file);

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

export const deleteImage = async (publicId: string, token: string) => {
  const response = await fetch(`${API_BASE}/image/${publicId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Erreur suppression");
  return await response.json();
};
