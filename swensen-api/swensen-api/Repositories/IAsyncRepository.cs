using System;

namespace swensen_api.Repositories
{
    public interface IAsyncRepository<T> where T : BaseEntity
    {
        Task<T> AddAsync(T entity);
        void Update(T entity);
        void Delete(T entity);


        T Add(T entity);
        Task<T> GetByIdAsync(Guid id);
        IQueryable<T> Query();

    }
}

