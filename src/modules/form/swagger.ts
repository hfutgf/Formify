/**
 * @swagger
 * tags:
 *   name: Forms
 *   description: Operation with forms
 */

/**
 * @swagger
 * /api/forms:
 *   post:
 *     summary: Create a new form
 *     tags: [Forms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               authorId:
 *                 type: integer
 *                 example: 1
 *               templateId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Form created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 5
 *                 authorId:
 *                   type: integer
 *                   example: 1
 *                 templateId:
 *                   type: integer
 *                   example: 2
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T18:06:16.646"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *                   example: null
 *       400:
 *         description: Bad request, invalid data provided
 *       404:
 *         description: Template not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/forms:
 *   get:
 *     summary: Get all forms
 *     tags: [Forms]
 *     responses:
 *       200:
 *         description: Successfully retrieved forms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 4
 *                   authorId:
 *                     type: integer
 *                     example: 1
 *                   templateId:
 *                     type: integer
 *                     example: 2
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-18T18:06:16.646"
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                     example: null
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/forms/{id}:
 *   delete:
 *     summary: Delete a form by ID
 *     tags: [Forms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the form to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted the form
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 4
 *                 authorId:
 *                   type: integer
 *                   example: 1
 *                 templateId:
 *                   type: integer
 *                   example: 2
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2024-10-18T18:06:16.646"
 *                 updatedAt:
 *                   type: string
 *                   nullable: true
 *                   example: null
 *       404:
 *         description: Form not found
 *       500:
 *         description: Internal server error
 */
