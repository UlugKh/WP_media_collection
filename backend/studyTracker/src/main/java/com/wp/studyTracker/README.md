Absolutely! Here's your updated README with the new changes integrated smoothly, while keeping your original tone and structure:

---

# 📚 My Backend Overview (Updated)

Hey team! 👋  
Here’s an updated breakdown of how the backend works now that we’ve added **users**, **reviews**, and **collection logic**. This is meant to help everyone (especially frontend folks) understand what’s available and how to work with it. Let’s dive in! 🚀

---

## 🧱 Updated Structure

In addition to our original **5 main collections**:

- 📘 `Books`
- 🎬 `Movies`
- 📺 `Shows`
- 📖 `Mangas`
- 🌸 `Animes`

We’ve now added two more:

- 👤 `Users`
- 📝 `Reviews`

These new entities introduce **user interaction** with the media, including **leaving reviews** and **managing their personal media collection**.

---

## 🔁 How It All Connects

### 👤 Users
- Users can register and have their own:
    - List of `reviewIds` (the reviews they've submitted)
    - `collection` (a map of media type → list of media IDs they’ve saved)
- Example:
  ```json
  {
    "username": "test",
    "name": "Test",
    "reviews": ["6567e...", "6577b..."],
    "collection": {
      "movies": ["tt4154796"],
      "books": ["9780143127741"]
    }
  }
  ```

### 📝 Reviews
- Reviews are stored in a separate collection.
- Each review has a body, and the ID of the media it's related to (`isbn`, `imdbId`, `malId` depending on media type).
- The media itself stores a **list of review IDs** (`reviewIds`) associated with it.
- Reviews **are not automatically removed** from media when deleted — that cleanup must be handled manually if needed.

---

## 📡 New Endpoints (General Idea)

> 📌 Frontend devs: use Postman or your preferred API client to explore the routes and test requests!  
> Also check controller files for specifics on input fields for POST requests.

Here’s a high-level of the additions:

### `/users`
- `POST /users` – Create a new user
- `GET /users` – Get all users
- `GET /users/{id}` – Get one user by ID
- `GET /users/{id}/reviews` – Get all reviews written by the user
- `GET /users/{id}/collection` – Get the user’s saved media collection
- `POST /users/{id}/collection/add` – Add a media ID to the user's collection (send mediaType + mediaId in the body)

### `/reviews`
- `POST /reviews` – Add a review
    - Requires: `body`, `mediaId`, `mediaType`, `userId`
- `DELETE /reviews/{id}` – Delete a review

---

## ❗ Note

🔒 The **login**, **authentication**, and other account-level logic are not handled by my part of the backend — so I haven’t documented those. Focus here is on the **review and collection system** and the **media content APIs**.

---

## ✅ Summary (Updated)

- The app now supports **user interactions** with media:
    - Saving media (like a personal watchlist or bookshelf)
    - Writing and linking **reviews** to specific titles
- Everything still follows the same structure:
    - **Repository** for DB logic
    - **Service** for data manipulation or validation
    - **Controller** for handling requests and responses
- Check the new endpoints to start plugging in frontend features like:
    - "Add to My Collection"
    - "Write a Review"
    - "Show My Reviews"

Let me know if anything is confusing or if you want sample request bodies to test with! 😄