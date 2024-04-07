using System;
using Microsoft.EntityFrameworkCore;
using swensen_api.Context;

namespace swensen_api.Repositories
{
    public class EfRepository<T> : IAsyncRepository<T> where T : BaseEntity
    {
        protected readonly EFContext _context;

        public EfRepository(EFContext context)
        {
            _context = context;
        }

        public async Task<T> AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);

            return entity;
        }

        public T Add(T entity)
        {
            _context.Set<T>().Add(entity);
            return entity;
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
        }
        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public T GetById(Guid id)
        {
            return _context.Set<T>().AsNoTracking().Where(x => x.UID == id).FirstOrDefault();
        }
        public async Task<T> GetByIdAsync(Guid id)
        {
            return await _context.Set<T>().AsNoTracking().Where(x => x.UID == id).FirstOrDefaultAsync();
        }

        public IQueryable<T> Query()
        {
            return _context.Set<T>().AsNoTracking();
        }

    }
}

