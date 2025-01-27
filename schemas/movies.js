const z = require('zod');

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().positive().min(1890).max(2026),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Drama', 'Sci-fi', 'Comedy', 'Fantasy', 'Horror', 'Thriller']), {
      required_error: 'Movie genre is required',
      invalid_type_error: 'Movie genre muste be an array of enum Genre'
    }
  )
});

function validateMovie (object) {
  return movieSchema.safeParse(object);
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object);
}

module.exports = {
  validateMovie, validatePartialMovie
};

/*
Parse:
Valida el objeto según el esquema.
Si la validación falla, lanza una excepción (throw error), lo que significa que hay que manejar este error usando un bloque try-catch.

SafeParse:
Valida el objeto según el esquema.
Siempre devuelve un objeto con la forma { success: boolean, data: T, error: ZodError }.
Si la validación es exitosa, success es true y data contiene el objeto validado.
Si la validación falla, success es false y error contiene un objeto de error de Zod describiendo las fallas de validación.
*/
