package com.perumalraj.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class ProductTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Product getProductSample1() {
        return new Product().id(1L).sample("sample1").name("name1").price(1);
    }

    public static Product getProductSample2() {
        return new Product().id(2L).sample("sample2").name("name2").price(2);
    }

    public static Product getProductRandomSampleGenerator() {
        return new Product()
            .id(longCount.incrementAndGet())
            .sample(UUID.randomUUID().toString())
            .name(UUID.randomUUID().toString())
            .price(intCount.incrementAndGet());
    }
}
